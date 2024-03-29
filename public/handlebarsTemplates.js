(function () {
  var template = Handlebars.template,
    templates = (Handlebars.templates = Handlebars.templates || {});
  templates["404"] = template({
    compiler: [7, ">= 4.0.0"],
    main: function (container, depth0, helpers, partials, data) {
      return '<header>\n\n  <h1 class="webpage-title">Cover Letter Template</h1>\n\n  <nav class="navbar">\n      <button type="button" id="create-resume-button"></button>\n  </nav>\n\n</header>\n\n<main class="error-container">\n  <h2>404</h2>\n  <h3>Woops! This is not a valid URL! Please try again</h3>\n</main>\n';
    },
    useData: true,
  });
  templates["coverTemplate"] = template({
    compiler: [7, ">= 4.0.0"],
    main: function (container, depth0, helpers, partials, data) {
      var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = helpers.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression;

      return (
        '<header>\n\n  <h1 class="webpage-title">Cover Letter Template</h1>\n\n  <nav class="navbar">\n      <button type="button" id="create-resume-button">' +
        alias4(
          ((helper =
            (helper =
              helpers.personName ||
              (depth0 != null ? depth0.personName : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "personName", hash: {}, data: data })
            : helper)
        ) +
        "'s Resume</button>\n  </nav>\n\n</header>\n\n\n<main id=" +
        alias4(
          ((helper =
            (helper =
              helpers["font-type"] ||
              (depth0 != null ? depth0["font-type"] : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "font-type", hash: {}, data: data })
            : helper)
        ) +
        " class=" +
        alias4(
          ((helper =
            (helper =
              helpers.colorSelected ||
              (depth0 != null ? depth0.colorSelected : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "colorSelected",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        '>\n\n  <div class="intro-container ' +
        alias4(
          ((helper =
            (helper =
              helpers.personalTextSize ||
              (depth0 != null ? depth0.personalTextSize : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "personalTextSize",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        '">\n\n      <div class="intro-text text-box">\n        <h2>' +
        alias4(
          ((helper =
            (helper =
              helpers.name || (depth0 != null ? depth0.name : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "name", hash: {}, data: data })
            : helper)
        ) +
        '</h2>\n      </div>\n\n      <div class="intro-text text-box">\n        <h2>' +
        alias4(
          ((helper =
            (helper =
              helpers.streetAddress ||
              (depth0 != null ? depth0.streetAddress : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "streetAddress",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        ",  " +
        alias4(
          ((helper =
            (helper =
              helpers.city || (depth0 != null ? depth0.city : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "city", hash: {}, data: data })
            : helper)
        ) +
        ",  " +
        alias4(
          ((helper =
            (helper =
              helpers.state || (depth0 != null ? depth0.state : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "state", hash: {}, data: data })
            : helper)
        ) +
        "  " +
        alias4(
          ((helper =
            (helper =
              helpers.zipCode || (depth0 != null ? depth0.zipCode : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "zipCode", hash: {}, data: data })
            : helper)
        ) +
        ' </h2>\n      </div>\n\n      <div class="intro-text text-box">\n        <h2>C : ' +
        alias4(
          ((helper =
            (helper =
              helpers.number || (depth0 != null ? depth0.number : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "number", hash: {}, data: data })
            : helper)
        ) +
        " || " +
        alias4(
          ((helper =
            (helper =
              helpers.emailAddress ||
              (depth0 != null ? depth0.emailAddress : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "emailAddress",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        '</h2>\n      </div>\n\n  </div>\n\n  <div class="line-break">\n  </div>\n\n\n  <article class="org-container ' +
        alias4(
          ((helper =
            (helper =
              helpers.orgTextSize ||
              (depth0 != null ? depth0.orgTextSize : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "orgTextSize", hash: {}, data: data })
            : helper)
        ) +
        '">\n    <div class="org-text text-box">\n      <h2>' +
        alias4(
          ((helper =
            (helper =
              helpers.date || (depth0 != null ? depth0.date : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "date", hash: {}, data: data })
            : helper)
        ) +
        '</h2>\n    </div>\n\n    <div class="org-text text-box">\n      <h2>' +
        alias4(
          ((helper =
            (helper =
              helpers.recipientName ||
              (depth0 != null ? depth0.recipientName : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "recipientName",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        '</h2>\n    </div>\n\n    <div class="org-text text-box">\n      <h2>' +
        alias4(
          ((helper =
            (helper =
              helpers.recipientTitle ||
              (depth0 != null ? depth0.recipientTitle : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "recipientTitle",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        '</h2>\n    </div>\n\n    <div class="org-text text-box">\n      <h2>' +
        alias4(
          ((helper =
            (helper =
              helpers.companyName ||
              (depth0 != null ? depth0.companyName : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "companyName", hash: {}, data: data })
            : helper)
        ) +
        '</h2>\n    </div>\n\n    <div class="org-text text-box">\n      <h2>' +
        alias4(
          ((helper =
            (helper =
              helpers.recipientAddress ||
              (depth0 != null ? depth0.recipientAddress : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "recipientAddress",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        ", " +
        alias4(
          ((helper =
            (helper =
              helpers.recipientCity ||
              (depth0 != null ? depth0.recipientCity : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "recipientCity",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        ", " +
        alias4(
          ((helper =
            (helper =
              helpers.recipientState ||
              (depth0 != null ? depth0.recipientState : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "recipientState",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        " " +
        alias4(
          ((helper =
            (helper =
              helpers.recipientZipCode ||
              (depth0 != null ? depth0.recipientZipCode : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "recipientZipCode",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        '</h2>\n    </div>\n\n    <div class="org-text end-text text-box">\n      <h2>Dear ' +
        alias4(
          ((helper =
            (helper =
              helpers.recipientName ||
              (depth0 != null ? depth0.recipientName : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "recipientName",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        ',</h2>\n    </div>\n  </article>\n\n  <div class="summary-container ' +
        alias4(
          ((helper =
            (helper =
              helpers.summaryTextSize ||
              (depth0 != null ? depth0.summaryTextSize : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "summaryTextSize",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        '">\n    <p>' +
        alias4(
          ((helper =
            (helper =
              helpers.summaryText ||
              (depth0 != null ? depth0.summaryText : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "summaryText", hash: {}, data: data })
            : helper)
        ) +
        '</p>\n  </div>\n\n  <div class="ending-container ' +
        alias4(
          ((helper =
            (helper =
              helpers.summaryTextSize ||
              (depth0 != null ? depth0.summaryTextSize : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "summaryTextSize",
                hash: {},
                data: data,
              })
            : helper)
        ) +
        '">\n    <div>\n      <h2>Sincerely,</h2>\n    </div>\n\n    <div>\n      <h2>' +
        alias4(
          ((helper =
            (helper =
              helpers.name || (depth0 != null ? depth0.name : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "name", hash: {}, data: data })
            : helper)
        ) +
        "</h2>\n    </div>\n  </div>\n\n</main>\n"
      );
    },
    useData: true,
  });
  templates["home"] = template({
    1: function (container, depth0, helpers, partials, data) {
      var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = helpers.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression;

      return (
        '  <div>\n    <a href="/people/' +
        alias4(
          ((helper =
            (helper =
              helpers.personID ||
              (depth0 != null ? depth0.personID : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "personID", hash: {}, data: data })
            : helper)
        ) +
        '">' +
        alias4(
          ((helper =
            (helper =
              helpers.personName ||
              (depth0 != null ? depth0.personName : depth0)) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, { name: "personName", hash: {}, data: data })
            : helper)
        ) +
        "</a>\n  </div>\n"
      );
    },
    compiler: [7, ">= 4.0.0"],
    main: function (container, depth0, helpers, partials, data) {
      var stack1;

      return (
        '<header>\n\n  <h1 class="webpage-title">Cover Letter Template</h1>\n\n  <nav class="navbar">\n      <button type="button" id="create-resume-button">Get Started</button>\n  </nav>\n\n</header>\n\n<main>\n\n' +
        ((stack1 = helpers.each.call(
          depth0 != null ? depth0 : container.nullContext || {},
          depth0 != null ? depth0.people : depth0,
          {
            name: "each",
            hash: {},
            fn: container.program(1, data, 0),
            inverse: container.noop,
            data: data,
          }
        )) != null
          ? stack1
          : "") +
        "\n</main>\n"
      );
    },
    useData: true,
  });
  templates["main"] = template({
    compiler: [7, ">= 4.0.0"],
    main: function (container, depth0, helpers, partials, data) {
      var stack1, helper;

      return (
        '<!DOCTYPE html>\n<html>\n\n  <head>\n\n    <meta charset="utf-8">\n    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">\n    <link rel = "stylesheet" href = "style.css">\n    <script src = "/handebarsTemplates.js" defer></script>\n    <script src = "/index.js" defer></script>\n    <title>Cover Letter</title>\n\n  </head>\n\n    ' +
        ((stack1 =
          ((helper =
            (helper =
              helpers.body || (depth0 != null ? depth0.body : depth0)) != null
              ? helper
              : helpers.helperMissing),
          typeof helper === "function"
            ? helper.call(
                depth0 != null ? depth0 : container.nullContext || {},
                { name: "body", hash: {}, data: data }
              )
            : helper)) != null
          ? stack1
          : "") +
        '\n\n\n    <!-- First Modal -->\n    <div class = "modal hidden">\n          <div class = "modal-content">\n              <span class= "exit-button">&times;</span>\n              <form class = "inner-modal">\n\n                  <div class ="middle">\n                    <h3>Cover Page Styling</h3>\n                  </div>\n\n                  <div class="input-box">\n                    <h3>Choose stylings for you cover page:</h3>\n                  </div>\n\n\n                    <div class="input-box">\n                      <h3>Personal Info Text Size</h3>\n                      <input type = \'radio\' name = \'personal-text-size\' value="8">8\n                      <input type = \'radio\' name = \'personal-text-size\' value="10">10\n                      <input type = \'radio\' name = \'personal-text-size\' value="12">12\n                      <input type = \'radio\' name = \'personal-text-size\' value="14">14\n                    </div>\n\n                    <div class="input-box">\n                      <h3>Organization Info Text Size</h3>\n                      <input type = \'radio\' name = \'org-text-size\' value="8">8\n                      <input type = \'radio\' name = \'org-text-size\' value="10">10\n                      <input type = \'radio\' name = \'org-text-size\' value="12">12\n                      <input type = \'radio\' name = \'org-text-size\' value="14">14\n\n                    </div>\n\n                    <div class="input-box">\n                      <h3>Summary Text Size</h3>\n                      <input type = \'radio\' name = \'summary-text-size\' value=\'8\'>8\n                      <input type = \'radio\' name = \'summary-text-size\' value=\'10\'>10\n                      <input type = \'radio\' name = \'summary-text-size\' value=\'12\'>12\n                      <input type = \'radio\' name = \'summary-text-size\' value=\'14\'>14\n\n                    </div>\n\n                    <div class="input-box">\n                      <h3>Fonts</h3>\n                      <input type = "radio" name = \'font-type\' value="helvetica">Helvetica\n                      <input type = "radio" name = \'font-type\' value="arial">Arial\n                      <input type = "radio" name = \'font-type\' value="timesNewRoman">Times New Roman\n                      <input type = "radio" name = \'font-type\' value="times">Time\n                    </div>\n\n                    <div class="input-box">\n                      <h3>Background Color</h3>\n                      <input type = "radio" name = \'background-color-type\' value="white">White\n                      <input type = "radio" name = \'background-color-type\' value="lightgrey">lightgrey\n                    </div>\n\n              </form>\n\n              <button class="next-button">Next</button>\n          </div>\n      </div>\n\n\n      <!-- Second Modal -->\n      <div class="modal hidden">\n        <div class="modal-content">\n          <span class= "exit-button">&times;</span>\n          <form class = "inner-modal">\n\n            <div class="middle">\n              <h3>Your Information</h3>\n            </div>\n\n\n            <div class="input-box">\n              <label>Name</label>\n              <input type="text" id="person-name-input">\n            </div>\n\n            <div class="input-box">\n              <label>Email Address</label>\n              <input type="text" id="person-email-address-input">\n            </div>\n\n            <div class="input-box">\n              <label>Street Address</label>\n              <input type="text" id="person-street-address-input">\n            </div>\n\n            <div class="input-box">\n              <label>City</label>\n              <input type="text" id="person-city-input">\n            </div>\n\n            <div class="input-box">\n              <label>State</label>\n              <input type="text" id="person-state-input">\n            </div>\n\n            <div class="input-box">\n              <label>Zip Code</label>\n              <input type="text" id="person-zipcode-input">\n            </div>\n\n            <div class="input-box">\n              <label>Phone Number</label>\n              <input type="text" id="person-number-input">\n            </div>\n\n\n          </form>\n\n          <button class="next-button">Next</button>\n      </div>\n\n    </div>\n\n    <!-- Third Modal -->\n    <div class="modal hidden">\n      <div class="modal-content">\n      <span class= "exit-button">&times;</span>\n\n      <form class="inner-modal">\n\n        <div class="middle">\n          <h3>Organization Information</h3>\n        </div>\n\n          <div class="input-box">\n            <label>Today\'s Date (xx/xx/xx)</label>\n            <textarea id="date"></textarea>\n          </div>\n\n          <div class="input-box">\n            <label>Recipient\'s Name</label>\n            <input type="text" id="recipient-name-input">\n          </div>\n\n          <div class="input-box">\n            <label>Recipient\'s Title</label>\n            <input type="text" id="recipient-title-input">\n          </div>\n\n          <div class="input-box">\n            <label>Company Name</label>\n            <input type="text" id="company-name-input">\n          </div>\n\n          <div class="input-box">\n            <label >Recipient\'s Address</label>\n            <input type="text" id="recipient-street-address-input">\n          </div>\n\n          <div class="input-box">\n            <label>City</label>\n            <input type="text" id="recipient-city-input">\n          </div>\n\n          <div class="input-box">\n            <label>State</label>\n            <input type="text" id="recipient-state-input">\n          </div>\n\n          <div class="input-box">\n            <label>Zip Code</label>\n            <input type="text" id="recipient-zipcode-input">\n          </div>\n\n        </form>\n\n        <button class="next-button">Next</button>\n\n      </div>\n    </div>\n\n\n    <div class = "modal hidden">\n      <div class = "modal-content">\n        <span class=\'exit-button\'>&times;</span>\n        <form class=\'inner-modal\'>\n\n          <div class="middle">\n            <h3>Summary Letter</h3>\n          </div>\n\n          <div class="input-box larger-flex">\n              <label for="summary-input">Summary</label>\n              <textarea id="summary-input"></textarea>\n          </div>\n\n\n        </form>\n\n        <input id="finish-button" type="submit" value="Finish">\n\n      </div>\n    </div>\n\n  </body>\n\n</html>\n'
      );
    },
    useData: true,
  });
})();
