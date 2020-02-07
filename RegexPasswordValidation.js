function validate(password) {
  
    return /(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(^[^<>%$;\.\s]*$)/.test(password);
  }