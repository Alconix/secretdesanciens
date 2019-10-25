import React from "react";

import { Link, useParams, useLocation, Route, Switch } from "react-router-dom";
import { Section, Box } from "react-bulma-components";

const Boss = props => {
  const { raid, boss } = useParams();
  const { pathname } = useLocation();

  const params = pathname.split("/").filter(e => e !== "");
  const active = params.length === 3 ? params[params.length - 1] : "overview";

  const strat = require(`../../Content/Boss/${raid}/${boss}/${boss}`);

  const GetContent = props => {
    return <span dangerouslySetInnerHTML={{ __html: props.content }} />;
  };

  const heroStyle = {
    backgroundImage: "url(/ep-banner.jpg)",
    backgroundSize: "contain no-repeat",
    backgroundPosition: "right 50% bottom 80%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    marginBottom: "20px",
  };

  // #region general content
  const GeneralContent = props => {
    return (
      <div>
        <h1 className='title has-text-left'>General:</h1>
        <div class='content has-text-left'>
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
        <h1 className='title has-text-left'>Tank:</h1>
        <div class='content has-text-left'>
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
        <div class='content has-text-left'>
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
      <div class='content has-text-left'>
        <hr />
        <GetContent content={strat.overview.dps} />
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
                    <h1 className='title is-1 has-text-light'>
                      <GetContent content={strat.name} />
                    </h1>
                    <h2 className='subtitle is-3 has-text-light'>
                      <GetContent content={strat.title} />
                    </h2>
                  </div>
                </div>
              </section>
            </Section>
            <div className='tabs'>
              <ul>
                <li className={active === "overview" ? "is-active" : ""}>
                  <Link to={`/${raid}/${boss}/overview`}>Overview</Link>
                </li>
                <li className={active === "details" ? "is-active" : ""}>
                  <Link to={`/${raid}/${boss}/details`}>Details</Link>
                </li>
                <li className={active === "info" ? "is-active" : ""}>
                  <Link to={`/${raid}/${boss}/info`}>Infos</Link>
                </li>
                <li className={active === "video" ? "is-active" : ""}>
                  <Link to={`/${raid}/${boss}/video`}>Video</Link>
                </li>
                <li className={active === "schema" ? "is-active" : ""}>
                  <Link to={`/${raid}/${boss}/schema`}>Schema</Link>
                </li>
              </ul>
            </div>
            <Section>
              <Switch>
                <Route path='/:raid/:boss/info'>Infos</Route>
                <Route path='/:raid/:boss/video'>Videos du boss</Route>
                <Route path='/:raid/:boss/schema'>Schemas</Route>
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
                    <Section>
                      {props.config.tank && strat.overview.tank !== "" && (
                        <TankContent />
                      )}
                    </Section>
                    <Section>
                      {props.config.heal && strat.overview.heal !== "" && (
                        <HealContent />
                      )}
                    </Section>
                    <Section>
                      {props.config.dps && strat.overview.dps !== "" && (
                        <DpsContent />
                      )}
                    </Section>
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
