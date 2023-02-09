import React, { Component } from "react";
class Auction extends Component {
  state = {};
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "29f2bef41fca95d1f720e0deca6e796b6",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  render() {
    return (
      <div id="auction" className="container">
        <div className="row">
          <div className="auction">
            <h1>Online Auctions FAQs</h1>
            <img src="/images/auctions/auction.png" title="" />
            <h4>Exclusive Rental’s cutting-edge online auction technology </h4>
            <p>
              We want you to feel completely comfortable and confident with the
              process so we have compiled answers to common queries. If you
              still have questions after reading through the following, please
              contact one of our salespeople.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Auction;
