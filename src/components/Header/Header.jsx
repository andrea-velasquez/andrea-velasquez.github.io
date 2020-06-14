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
      <section id="Header">
        <div className="field field__subject">
          <h2 className="field__name">Subject:</h2>
          <h1 className="field__text">Andrea Velásquez Gushiken</h1>
        </div>

        <div className="field field__occupation">
          <h3>
            <span className="field__name">Occupation: </span>
            <span className="field__text">Computer Science Student</span>
          </h3>
        </div>

        <div className="field field__accounts">
          { this.state.accounts.map((account, index) => (
            <div className="field__account" key={ index }>
              <span className="field__name"><ReactSVG src={ account.logo } className="logo" wrapper="span"/>{ account.site }: </span>
              <span className="field__text"><a href={account.link} target='_blank'>{ account.username }</a></span>
            </div>
          )) }
        </div>
      </section>
    );
  }
}

export default Header;
