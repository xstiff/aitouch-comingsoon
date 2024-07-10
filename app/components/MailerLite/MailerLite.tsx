import { useEffect } from "react";
import "./MailerLite.scss";
const MailerLiteForm = () => {
  useEffect(() => {
    const js = `
    function ml_webform_success_16103246() {
      var $ = ml_jQuery || jQuery;
      $('.ml-subscribe-form-16103246 .row-success').show();
      $('.ml-subscribe-form-16103246 .row-form').hide();
    }
    `;
    const script = document.createElement("script");
    const scriptText = document.createTextNode(js);
    const scriptCaptcha = document.createElement("script");
    scriptCaptcha.src = `https://www.google.com/recaptcha/api.js`;
    document.body.appendChild(scriptCaptcha);

    script.appendChild(scriptText);
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = `https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127`;

    document.body.appendChild(script2);
  }, []);

  return (
    <>
      <div
        id={`mlb2-16103246`}
        className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-16103246`}
      >
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/1004060/forms/125763809993295401/subscribe"
                data-code=""
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent horozintalForm">
                  <div className="ml-form-horizontalRow">
                    <div className="ml-input-horizontal">
                      <div className="horizontal-fields">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input
                            type="email"
                            className="form-control"
                            data-inputmask=""
                            required
                            name="fields[email]"
                            placeholder="Enter your email..."
                          />
                          <input type="hidden" name="anticsrf" value="true" />
                          <div className="ml-form-recaptcha ml-validate-required">
                            <div
                              className="g-recaptcha"
                              data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-button-horizontal primary">
                      <div>
                        <button type="submit">Subscribe</button>

                        <p className="loading" style={{ display: "none" }}>
                          <div
                            className="ml-form-embedSubmitLoad"
                            style={{ margin: "0 auto" }}
                          >
                            Please wait...
                          </div>
                        </p>
                        {/* <button
                          type="button"
                          disabled={true}
                          style={{ display: "none" }}
                          className="loading"
                        >
                          <div
                            className="ml-form-embedSubmitLoad"
                            style={{ margin: "0 auto" }}
                          >
                            Wait
                          </div>
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="ml-submit" value="1" />
              </form>
            </div>
            <div
              className="ml-form-successBody row-success"
              style={{ display: "none" }}
            >
              <div
                className="ml-form-successContent"
                style={{
                  height: "140px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <p>
                  Thank you!
                  <br />
                  Check your email for an confirmation!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailerLiteForm;
