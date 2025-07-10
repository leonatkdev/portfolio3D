const express = require("express");
const axios = require('axios');
const querystring = require('querystring');
const router = express.Router();
require('dotenv').config();

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID; // Your Spotify client ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET; // Your Spotify client secret
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN; // Your Spotify refresh token
// const redirect_uri ="http://localhost:4000/callback"
const redirect_uri ="https://portfolio3d-c4gq.onrender.com/callback"


const SCOPE = [
 "user-read-email",
  "playlist-read-collaborative",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played"
]

router.get('/login', (req, res) => {
    const authUrl = 'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: CLIENT_ID,
        scope: SCOPE.join(' '),
        redirect_uri: redirect_uri,
        state: '123456',
        prompt: 'consent'
      });
      console.log('authUrl', authUrl)
    res.redirect(authUrl);
  });
  
  router.get('/callback', async (req, res) => {
    const code = req.query.code || null;
  
    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri,
      }), {
        headers: {
          'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      res.json({
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      });
    } catch (error) {
      console.error('Error getting tokens:', error.response ? error.response.data : error.message);
      res.status(500).send('Error getting tokens');
    }
  });


  const getAccessToken = async () => {
    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
      }), {
        headers: {
          'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      return response.data.access_token;
    } catch (error) {
      console.error('Error getting access token:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
  
  router.get('/recently-played', async (req, res) => {
    try {
      const access_token = await getAccessToken();
      const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching currently playing track:', error.response ? error.response.data : error.message);
      res.status(500).send('Error fetching currently playing track');
    }
  });

module.exports = router;
