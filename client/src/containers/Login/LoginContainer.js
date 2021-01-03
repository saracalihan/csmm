import { Component } from "react";
import { connect } from "react-redux";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

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

LoginContainer.propTypes = {};
LoginContainer.defaultProps = {
  children: () => {},
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
