import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadRepos } from '../../../../store/repos';

class Repo extends React.Component {
    componentDidMount() {
        const { repos, loadRepos } = this.props;
        if (!repos.list && !repos.isLoading) {
            loadRepos();
        }
    }

    get repo() {
        const {
            repos,
            match
        } = this.props;

        return repos.list.find((repo) =>
            Number(match.params.id) === repo.id
        );
    }

    render() {
        if (!this.repo) {
            return null;
        }
    }
}

const mapStateToProps = state => ({
    repos: state.repos
});

const mapDispatchToProps = {
    loadRepos
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Repo));
