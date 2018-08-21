import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSetPortfolioList } from '../actions/portfolio';
import Section from '../components/Section/Section';
import PortfolioList from '../components/Portfolio/PortfolioList';

class PortfolioPage extends Component {
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

const mapStateToProps = state => ({
  portfolios: state.portfolio.items,
});

const mapDispatchToProps = dispatch => ({
  startSetPortfolioList: params => dispatch(startSetPortfolioList(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PortfolioPage);
