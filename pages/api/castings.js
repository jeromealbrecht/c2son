// pages/api/castings.js
import axios from 'axios';

const handler = async (req, res) => {
  try {
    const response = await axios.get('https://api.nawak.me/castings', {
      params: {
        sex: 2,
        age: '0,56',
        paid: true,
        profession: 296
      },
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.data && response.data.length > 0) {
      res.status(200).json(response.data);
    } else {
      res.status(404).json({ message: 'Aucun casting trouvé' });
    }
  } catch (error) {
    console.error('Error fetching the latest castings:', error);
    if (error.response) {
      res.status(error.response.status).json({ message: error.response.statusText });
    } else if (error.request) {
      res.status(500).json({ message: 'Aucune réponse reçue du serveur' });
    } else {
      res.status(500).json({ message: 'Erreur réseau ou de configuration: ' + error.message });
    }
  }
};

export default handler;