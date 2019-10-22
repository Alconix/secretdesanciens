import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import { Link, useParams, useLocation, Route, Switch } from "react-router-dom";

const Boss = props => {
  const { raid, boss } = useParams();
  const { pathname } = useLocation();

  const params = pathname.split("/").filter(e => e !== "");
  const active = params.length === 3 ? params[params.length - 1] : "overview";

  const strat = require(`../../Content/Boss/${raid}/${boss}`);
  console.log(strat.details);

  const GetContent = props => {
    return <span dangerouslySetInnerHTML={{ __html: props.content }} />;
  };

  return (
    <div>
      <div className='columns'>
        <div className='column has-text is-6 is-offset-3'>
          <section className='hero'>
            <div className='hero-body'>
              <div className='container'>
                <h1 className='title'>
                  <GetContent content={strat.name} />
                </h1>
                <h2 className='subtitle'>
                  <GetContent content={strat.title} />
                </h2>
              </div>
            </div>
            <div className='hero-foot'></div>
          </section>
          <div className='tabs'>
            <ul>
              <li className={active === "overview" ? "is-active" : ""}>
                <Link to={`/${raid}/${boss}/overview`}>Overview</Link>
              </li>
              <li className={active === "details" ? "is-active" : ""}>
                <Link to={`/${raid}/${boss}/details`}>Details</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path='/:raid/:boss/details'>
              <div className='content'>
                <span dangerouslySetInnerHTML={{ __html: strat.details }} />
              </div>
            </Route>
            <Route path='/:raid/:boss/'>
              <div className='content'>
                <GetContent content={strat.overview.general} />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Boss;
