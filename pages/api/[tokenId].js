export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId.match(/\d*/);
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://raw.githubusercontent.com/sharbat/DuckNFTCollection/master/public/cryptodevs/";
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
      name: "Duck #" + tokenId,
      description: "This NFT was generated in  Adobe Photoshop",
      image: image_url + tokenId + ".png",
    });
  }