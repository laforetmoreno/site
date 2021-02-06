import React, { useState, useEffect } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Helmet } from "react-helmet";
import Chip from '@material-ui/core/Chip';
import Alert from '@material-ui/lab/Alert';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import uniqBy from 'lodash/uniqBy';
import interleave from 'loose-interleave';
import 'fontsource-roboto';

const pageStyles = {
  padding: 10,
};

const tagStyles = {
  margin: 5,
};

const buttonStyles = {
  marginTop: 10,
};

const tagsWrapperStyles = {
  margin: -5,
  textAlign: 'center',
  marginTop: 10,
};

const titleStyles = {
  marginBottom: 20,
};

const heroStyles = {
  maxWidth: 720,
  margin: '0 auto',
};

const loadingStyle = {
  marginTop: 10,
};

const IndexPage = () => {
  const [tags, setTags] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const fetchSearchResults = async (query) => {
    const searchUrl = 'https://api.leetags.com/search';

    let cancel;
    if (cancel) {
      cancel.cancel();
    }

    cancel = axios.CancelToken.source();

    let response;
    try {
      response = await axios.get(searchUrl, {
        cancelToken: cancel.token,
        params: {
          query,
        }
      });
    } catch (e) {
      if (axios.isCancel(e)) {
        setLoading(false);
        setMessage('Failed to fetch results. Please check network');
      }
    }

    if (!response) {
      return;
    }

    const { data } = response;
    const formattedTags = uniqBy(interleave(...response.data.map(tag => tag.relatedTags)), 'name');
    setTags(formattedTags);
    const resultMessage = !data.length ?
      'Não foi encontrada nenhuma hashtags. Por favor tente uma busca diferente.' :
      '';
    setMessage(resultMessage);
    let formattedSelectedTags = selectedTags.filter(selectedTag => formattedTags.findIndex(formattedTag => formattedTag.name === selectedTag) > -1);
    formattedSelectedTags = formattedTags.slice(0, 30).map(formattedTag => formattedTag.name);
    setSelectedTags(formattedSelectedTags);
    setLoading(false);
  };

  useEffect(() => {
    const formattedText = selectedTags.map(selectedTag => `#${selectedTag}`).join(' ');
    setText(formattedText);
  }, [selectedTags]);

  const handleOnInputChange = (event) => {
    const query = event.target.value;
    setQuery(query);
  };

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    const formattedQuery = query.trim();
    if (!formattedQuery) {
      setTags([]);
      setSelectedTags([]);
      setMessage(formattedQuery);
    } else {
      setLoading(true);
      setMessage('');
      fetchSearchResults(formattedQuery);
    }
  };

  const handleCopyButtonClick = () => {
    setCopied(true);
  };

  const handleSnackbarClose = () => {
    setCopied(false);
  }

  const isTagSelected = (tagName) => selectedTags.indexOf(tagName) > -1;

  const handleTagClick = (tag) => {
    if (isTagSelected(tag.name)) {
      const filteredSelectedTags = selectedTags.filter((selectedTag) => selectedTag !== tag.name);
      setSelectedTags(filteredSelectedTags);
    } else {
      const updatedSelectedTags = [...selectedTags, tag.name];
      setSelectedTags(updatedSelectedTags);
    }
  };

  return (
    <main style={pageStyles}>
      <Helmet>
        <title>Barão das Hashtags - Análise de Hashtags</title>
        <script id="hotmart_launcher_script">
          {`(function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){
            (l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),
            e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)
            })(window,document,'script','//launcher.hotmart.com/launcher.js','hot');
            hot('account','180c77e4-ed85-351c-bcf6-2e1ac9abe717');`}
        </script>
      </Helmet>
      <div style={heroStyles}>
        <Typography style={titleStyles} align="center" variant="h5" component="h1">
          Digite no campo abaixo algumas palavras relacionadas com sua postagem, depois copie as hashtags do resultado e use no Instagram para impulsionar seu alcance.
        </Typography>
        <form onSubmit={handleOnFormSubmit} noValidate autoComplete="off">
          <Input
            fullWidth
            label="Procurar hashtags"
            variant="filled"
            placeholder="#praia #bikini #natureza"
            onChange={handleOnInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            style={buttonStyles}
            fullWidth
          >
            Procurar hashtags
          </Button>
          {loading && <LinearProgress style={loadingStyle} />}
          {!loading && !!tags.length && <CopyToClipboard
            text={text}
            onCopy={handleCopyButtonClick}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={buttonStyles}
              fullWidth
            >
              {`Copiar hashtags selecionadas (${selectedTags.length}/30)`}
            </Button>
          </CopyToClipboard>}
        </form>
      </div>
      {message && <p>{message}</p>}
      {!loading && !!tags.length && <div style={tagsWrapperStyles}>
        {tags.map((tag) => (
          <Chip
            key={tag.name}
            style={tagStyles}
            label={`#${tag.name} · ${Math.round(tag.relevance) * 5}% relevante`}
            onClick={() => handleTagClick(tag)}
            color={isTagSelected(tag.name) ? 'primary' : 'default'}
          />
        ))}
      </div>}
      <Snackbar
        open={copied}
        onClose={handleSnackbarClose}
        autoHideDuration={3000}
      >
        <Alert onClose={handleSnackbarClose} variant="filled" severity="success">
          Hashtags selecionadas copiadas!
        </Alert>
      </Snackbar>
    </main>
  )
}

export default IndexPage
