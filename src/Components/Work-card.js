import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "./img/Music.jpeg";
import img2 from "./img/Music.jpeg";
import img3 from "./img/p.jpg";
import * as React from 'react'
s
function BasicExample() {
  return (
    <div className="Card-container">
      <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Img className="card-img" variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Coding</Card.Title>
            <Card.Text>
              “Make it work, make it right, make it fast.”– Kent Beck
            </Card.Text>
            <Button variant="primary" href="https://www.google.com/search?q=coding+meaning+wikipedia&rlz=1C1CHBF_enIN1051IN1051&sxsrf=AB5stBgbbINzzua1uJEN80M9W0FX8d3KJQ%3A1689190161829&ei=Ef-uZM6pMv7aseMP65O3yA4&ved=0ahUKEwiO9rbc84mAAxV-bWwGHevJDekQ4dUDCBA&uact=5&oq=coding+meaning+wikipedia&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMggIABAWEB4QDzIICAAQigUQhgMyCAgAEIoFEIYDMggIABCKBRCGAzIICAAQigUQhgM6BwgjELADECc6CggAEEcQ1gQQsAM6BwgjEIoFECc6BAgjECc6CwgAEIoFELEDEJECOg0IABCABBAUEIcCEMkDOggIABCABBCSAzoICAAQgAQQsQM6CAgAEIoFEJECOgoIABCABBAUEIcCOgUIABCABDoQCAAQigUQsQMQkQIQRhD5AToNCAAQgAQQFBCHAhCxAzomCAAQigUQsQMQkQIQRhD5ARCXBRCMBRDdBBBGEPQDEPUDEPYDGAE6DQgAEIoFEJECEEYQ_wFKBAhBGABQ1gFYojxg9T9oAXABeACAAZEDiAH6F5IBCjAuMTUuMi4wLjGYAQCgAQHAAQHIAQraAQYIARABGBM&sclient=gws-wiz-serp" target="_blank">Read More...</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img className="card-img" variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Music</Card.Title>
            <Card.Text>"Where words fail, music speaks"</Card.Text>
            <Button variant="primary" href="https://www.google.com/search?q=music+meaning+in+wikipedia&rlz=1C1CHBF_enIN1051IN1051&oq=music+meaning+in+wikipedia&aqs=chrome..69i57j0i546l5.8506j1j9&sourceid=chrome&ie=UTF-8" target="_blank">Read More...</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img className="card-img" variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Writing</Card.Title>
            <Card.Text>
              "A writer is working when he's staring out of the window"
            </Card.Text>
            <Button variant="primary" href="https://www.google.com/search?q=meaning+of+poetry+writing+in+wikipedia&rlz=1C1CHBF_enIN1051IN1051&oq=meaning+of+poetry+writing+in+wikipedia&aqs=chrome..69i57j33i22i29i30j33i15i22i29i30.10635j1j9&sourceid=chrome&ie=UTF-8" target="_blank">Read More...</Button>
          </Card.Body>
        </Card>
        </div>
    </div>
  );
}

export default BasicExample;
