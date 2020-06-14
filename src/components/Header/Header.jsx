import React, { Component } from 'react';
import './Header.scss';
import { ReactSVG } from 'react-svg'
import GithubLogo from '../../assets/images/brand-logos/github.svg'
import LinkedinLogo from '../../assets/images/brand-logos/linkedin.svg'
import EmailLogo from '../../assets/images/brand-logos/email.svg'

class Header extends Component {
  state = {
    accounts: [
      {
        site: 'Github',
        username: '@andrea-velasquez',
        link: 'https://github.com/andrea-velasquez/',
        logo: GithubLogo
      },
      {
        site: 'LinkedIn',
        username: 'andrea-velasquez-gushiken-06235314a',
        link: 'https://linkedin.com/in/andrea-velasquez-gushiken-06235314a',
        logo: LinkedinLogo
      },
      {
        site: 'Email',
        username: 'andreavel@outlook.com',
        link: 'mailto:andreavel@outlook.com',
        logo: EmailLogo
      },
    ],
  };

  render() {
    return (
      <section>
        <div className="header-field">
          <h2 className="field-name">Subject:</h2>
          <h1>Andrea Velásquez Gushiken</h1>
        </div>

        <div className="header-field occupation">
          <h3>
            <span className="field-name">Occupation: </span>
            Computer Science Student
          </h3>
        </div>

        <div className="header-field accounts">
          { this.state.accounts.map((account, index) => (
            <div key={ index }>
              <span className="field-name"><ReactSVG src={ account.logo } className="logo" wrapper="span"/>{ account.site }: </span>
              <span><a href={account.link} target='_blank'>{ account.username }</a></span>
            </div>
          )) }
        </div>
      </section>
    );
  }
}

export default Header;
