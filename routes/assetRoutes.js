import { Router } from 'express';
import { authenticateUser } from '../util/authUtil';
import cloudinary from 'cloudinary';
import { throttle } from '../index.js';

// Configure Cloudinary with your credentials
cloudinary.v2.config({ 
  cloud_name: 'dkr6vhser', 
  api_key: '344927598911463', 
  api_secret: 'rFJh4DlTTQXS2qyd5047NJnrelU' 
});

const assetRoutes = Router();

// Example authenticated asset route for accessing car images
assetRoutes.get('/:imageId', authenticateUser, (req, res) => {
  const { imageId } = req.params;

  throttle(() => {
    cloudinary.v2.api.resources_by_ids([imageId], (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        if (result.resources.length > 0) {
          const imageUrl = result.resources[0].secure_url;
          res.send(imageUrl);
        } else {
          res.status(202).json({ message: 'Image not found' });
        }
      }
    });
  }, () => {
    res.status(202).json({ message: 'Please wait' });
  });
});

export default assetRoutes;
