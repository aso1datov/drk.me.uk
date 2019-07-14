/**
 * Vendor
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

/**
 * Components
 */

import Section from '@/components/Section';
import PortfolioList from '@/components/Portfolio/PortfolioList';

/**
 * Actions
 */

import { startSetPortfolioList } from '@/actions/portfolio';

/**
 * Typings
 */

import { IStore } from '@/store/interfaces';
import { IPortfolioPage } from './interfaces';
type IPortfolioPageProps = IPortfolioPage;

/**
 * Expo
 */

class PortfolioPage extends Component<IPortfolioPageProps> {
  componentDidMount() {
    // this.props.startSetPortfolioList();
  }
  render() {
    const { portfolios, startSetPortfolioList } = this.props;

    return (
      <Section title="Portfolio">
        <h2>Portfolio</h2>
        <PortfolioList portfolios={portfolios} />
      </Section>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  portfolios: state.portfolio.items,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  startSetPortfolioList: (params: any) =>
    dispatch(startSetPortfolioList(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioPage);
