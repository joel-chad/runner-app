
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formValid, setFormValid] = useState(true)
    const [error, setError] = useState('')
    const [loadingVisible, setLoadingVisible] = useState(false)

  const handleCloseNotification = () => {
    setFormValid(true)
  };

//   componentDidMount() {
//     this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
//       this.setState({ user });
//     });
//   }
  Login = () => {
    setLoadingVisible(true)

    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(user => {
    //     this.setState({ user });
    //     this.setState({ loadingVisible: false });
    //   })
    //   .catch(error =>
    //     this.setState({
    //       error: error.message,
    //       formValid: false
    //       // loadingVisible: false
    //     })
    //   );
  };
//   componentWillUnmount() {
//     if (this.unsubscriber) {
//       this.unsubscriber();
//     }
//   }
  const handleEmailChange = email => {
    // parent class change handler is always called with field name and value
    setEmail(email)
  };
  const handlePasswordChange = password => {
    // parent class change handler is always called with field name and value
    setPassword(password)
  };
//   static navigationOptions = {
//     header: null
//   };
  
    // const { formValid, loadingVisible } = this.state;
    const showNotification = formValid ? false : true;
    const bgColor = formValid ? colors.green01 : colors.darkOrange;