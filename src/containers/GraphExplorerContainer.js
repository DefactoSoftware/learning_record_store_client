import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import GraphExplorer from '../components/GraphExplorer';
import { allStatements } from '../queries/statement';

const GraphExplorerContainer = graphql(allStatements)(GraphExplorer);

const mapStateToProps = (state, ownProps) => ownProps;

const mapDispatchToProps = dispatch=> ({});

export default connect(mapStateToProps, mapDispatchToProps)(GraphExplorerContainer);
