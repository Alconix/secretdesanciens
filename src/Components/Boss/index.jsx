import React, { useEffect } from "react";

import { useParams, useLocation, Route, Switch } from "react-router-dom";
import { Section, Box } from "react-bulma-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Boss = props => {
  const { raid, boss } = useParams();
  const { pathname } = useLocation();

  const params = pathname.split("/").filter(e => e !== "");
  const active = params.length === 4 ? params[params.length - 1] : "overview";

  const strat = require(`../../Content/Boss/${raid}/${boss}/${boss}`);

  useEffect(() => {
    document.title = `${strat.name} - Secret des Anciens`;
  }, [strat.name]);

  const GetContent = props => {
    return <span dangerouslySetInnerHTML={{ __html: props.content }} />;
  };

  const heroStyle = {
    backgroundImage:
      "url(https://wow.zamimg.com/uploads/blog/images/17423-upcoming-nyalotha-raid-testing-on-8-3-ptr-wrathion-maut-prophet-skitra-ra-den.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "right 50%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    marginBottom: "20px",
  };

  // #region general content
  const GeneralContent = () => {
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
  const TankContent = () => {
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
  const HealContent = () => {
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
  const DpsContent = () => {
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

  const goPrev = () => {
    window.location.assign(`/strats/${raid}/${strat.prev}`);
  };

  const goNext = () => {
    window.location.assign(`/strats/${raid}/${strat.next}`);
  };

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
                    <a href={`/strats/${raid}/${boss}/overview`}>Overview</a>
                  )}
                </li>
                <li className={active === "details" ? "is-active" : ""}>
                  {strat.details && (
                    <a href={`/strats/${raid}/${boss}/details`}>Details</a>
                  )}
                </li>
                <li className={active === "info" ? "is-active" : ""}>
                  {strat.info && (
                    <a href={`/strats/${raid}/${boss}/info`}>Infos</a>
                  )}
                </li>
                <li className={active === "video" ? "is-active" : ""}>
                  {strat.video && (
                    <a href={`/strats/${raid}/${boss}/video`}>Video</a>
                  )}
                </li>
                <li className={active === "schema" ? "is-active" : ""}>
                  {strat.schema && (
                    <a href={`/strats/${raid}/${boss}/schema`}>Schema</a>
                  )}
                </li>
              </ul>
            </div>
            <nav className='level'>
              <div className='level-left'>
                {strat.prev && (
                  <button className='level-item button' onClick={goPrev}>
                    <FontAwesomeIcon
                      style={{ paddingRight: "5px" }}
                      icon={faChevronLeft}
                    />
                    {strat.displayPrev}
                  </button>
                )}
              </div>
              <div className='level-right'>
                {strat.next && (
                  <button className='level-item button' onClick={goNext}>
                    {strat.displayNext}
                    <FontAwesomeIcon
                      style={{ paddingLeft: "5px" }}
                      icon={faChevronRight}
                    />
                  </button>
                )}
              </div>
            </nav>
            <Section>
              <Switch>
                <Route path='/strats/:raid/:boss/info'>{strat.info}</Route>
                <Route path='/strats/:raid/:boss/video'>{strat.video}</Route>
                <Route path='/strats/:raid/:boss/schema'>{strat.schema}</Route>
                <Route path='/strats/:raid/:boss/details'>
                  <div className='content has-text-left'>
                    <GetContent content={strat.details} />
                  </div>
                </Route>
                <Route path='/strats/:raid/:boss/'>
                  <div className='content'>
                    <Section>
                      <GeneralContent />
                    </Section>

                    {strat.overview.tank !== "" && (
                      <Section>
                        <TankContent />
                      </Section>
                    )}
                    {strat.overview.heal !== "" && (
                      <Section>
                        <HealContent />
                      </Section>
                    )}
                    {strat.overview.dps !== "" && (
                      <Section>
                        <DpsContent />
                      </Section>
                    )}
                  </div>
                </Route>
              </Switch>
            </Section>
            <nav className='level'>
              <div className='level-left'>
                {strat.prev && (
                  <button className='level-item button' onClick={goPrev}>
                    <FontAwesomeIcon
                      style={{ paddingRight: "5px" }}
                      icon={faChevronLeft}
                    />
                    {strat.displayPrev}
                  </button>
                )}
              </div>
              <div className='level-right'>
                {strat.next && (
                  <button className='level-item button' onClick={goNext}>
                    {strat.displayNext}
                    <FontAwesomeIcon
                      style={{ paddingLeft: "5px" }}
                      icon={faChevronRight}
                    />
                  </button>
                )}
              </div>
            </nav>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Boss;
