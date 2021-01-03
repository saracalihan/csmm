import { Component } from "react";
import { connect } from "react-redux";
import { getMe } from "../../redux-store/actions/me";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMe();
  }

  render() {
    const { children } = this.props;
    return (
      children &&
      children({
        states: { ...this.state },
      })
    );
  }
}

HomeContainer.propTypes = {};
HomeContainer.defaultProps = {
  children: () => {},
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { getMe };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
