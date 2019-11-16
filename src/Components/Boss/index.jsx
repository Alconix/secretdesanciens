import React, { useEffect } from "react";

import { useParams, useLocation, Route, Switch } from "react-router-dom";
import { Section, Box } from "react-bulma-components";

const Boss = props => {
  const { raid, boss } = useParams();
  const { pathname } = useLocation();

  const params = pathname.split("/").filter(e => e !== "");
  const active = params.length === 3 ? params[params.length - 1] : "overview";

  const strat = require(`../../Content/Boss/${raid}/${boss}/${boss}`);

  useEffect(() => {
    document.title = `${strat.name} - Secret des Anciens`;
  }, [strat.name]);

  const GetContent = props => {
    return <span dangerouslySetInnerHTML={{ __html: props.content }} />;
  };

  const heroStyle = {
    backgroundImage:
      "url(https://momentus.wtf/images/progress/30-07-19-10-bfa-the-eternal-palace-banner.jpg)",
    backgroundSize: "contain no-repeat",
    backgroundPosition: "right 50% bottom 100%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    marginBottom: "20px",
  };

  // #region general content
  const GeneralContent = props => {
    return (
      <div>
        <h1 className='title has-text-left'>General</h1>
        <div className='content has-text-left'>
          <hr />
          <GetContent content={strat.overview.general} />
        </div>
      </div>
    );
  };
  // #endregion

  // #region tank content
  const TankContent = props => {
    return (
      <div>
        <h1 className='title has-text-left'>Tank</h1>
        <div className='content has-text-left'>
          <hr />
          <GetContent content={strat.overview.tank} />
        </div>
      </div>
    );
  };
  // #endregion

  // #region heal content
  const HealContent = props => {
    return (
      <div>
        <h1 className='title has-text-left'>Heal</h1>
        <div className='content has-text-left'>
          <hr />
          <GetContent content={strat.overview.heal} />
        </div>
      </div>
    );
  };
  // #endregion

  // #region dps content
  const DpsContent = props => {
    return (
      <div>
        <h1 className='title has-text-left'>DPS</h1>
        <div className='content has-text-left'>
          <hr />
          <GetContent content={strat.overview.dps} />
        </div>
      </div>
    );
  };
  // #endregion

  return (
    <div>
      <div className='columns'>
        <div className='column has-text is-6 is-offset-3'>
          <Box style={{ minHeight: "92vh" }}>
            <Section>
              <section className='hero' style={heroStyle}>
                <div className='hero-body'>
                  <div className='container has-text-left'>
                    {!strat.inverted ? (
                      <h1 className='title is-1 has-text-light'>
                        <GetContent content={strat.name} />
                      </h1>
                    ) : (
                      <h3 className='subtitle is-3 has-text-light'>
                        <GetContent content={strat.title} />
                      </h3>
                    )}
                    {!strat.inverted ? (
                      <h3 className='subtitle is-3 has-text-light'>
                        <GetContent content={strat.title} />
                      </h3>
                    ) : (
                      <h1 className='title is-1 has-text-light'>
                        <GetContent content={strat.name} />
                      </h1>
                    )}
                  </div>
                </div>
              </section>
            </Section>
            <div className='tabs'>
              <ul>
                <li className={active === "overview" ? "is-active" : ""}>
                  {strat.overview && (
                    <a href={`/${raid}/${boss}/overview`}>Overview</a>
                  )}
                </li>
                <li className={active === "details" ? "is-active" : ""}>
                  {strat.details && (
                    <a href={`/${raid}/${boss}/details`}>Details</a>
                  )}
                </li>
                <li className={active === "info" ? "is-active" : ""}>
                  {strat.info && <a href={`/${raid}/${boss}/info`}>Infos</a>}
                </li>
                <li className={active === "video" ? "is-active" : ""}>
                  {strat.video && <a href={`/${raid}/${boss}/video`}>Video</a>}
                </li>
                <li className={active === "schema" ? "is-active" : ""}>
                  {strat.schema && (
                    <a href={`/${raid}/${boss}/schema`}>Schema</a>
                  )}
                </li>
              </ul>
            </div>
            <Section>
              <Switch>
                <Route path='/:raid/:boss/info'>{strat.info}</Route>
                <Route path='/:raid/:boss/video'>{strat.video}</Route>
                <Route path='/:raid/:boss/schema'>{strat.schema}</Route>
                <Route path='/:raid/:boss/details'>
                  <div className='content has-text-left'>
                    <GetContent content={strat.details} />
                  </div>
                </Route>
                <Route path='/:raid/:boss/'>
                  <div className='content'>
                    <Section>
                      <GeneralContent />
                    </Section>

                    {props.config.tank && strat.overview.tank !== "" && (
                      <Section>
                        <TankContent />
                      </Section>
                    )}
                    {props.config.heal && strat.overview.heal !== "" && (
                      <Section>
                        <HealContent />
                      </Section>
                    )}
                    {props.config.dps && strat.overview.dps !== "" && (
                      <Section>
                        <DpsContent />
                      </Section>
                    )}
                  </div>
                </Route>
              </Switch>
            </Section>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Boss;