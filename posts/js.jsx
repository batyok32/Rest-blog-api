
    getCustomers() {
        const url = `${API_URL}/api/customers/`;
        return axios.get(url).then(response => response.data);
    }  
    getCustomersByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getCustomer(pk) {
        const url = `${API_URL}/api/customers/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteCustomer(customer){
        const url = `${API_URL}/api/customers/${customer.pk}`;
        return axios.delete(url);
    }
    createCustomer(customer){
        const url = `${API_URL}/api/customers/`;
        return axios.post(url,customer);
    }
    updateCustomer(customer){
        const url = `${API_URL}/api/customers/${customer.pk}`;
        return axios.put(url,customer);}

        handleDelete(e,pk){
            var  self  =  this;
            customersService.deleteCustomer({pk :  pk}).then(()=>{
                var  newArr  =  self.state.customers.filter(function(obj) {
                    return  obj.pk  !==  pk;
                });
        
                self.setState({customers:  newArr})
            });
        }
        
        nextPage(){
            var  self  =  this;
            console.log(this.state.nextPageURL);        
            customersService.getCustomersByURL(this.state.nextPageURL).then((result) => {
                self.setState({ customers:  result.data, nextPageURL:  result.nextlink})
            });
        }

        createStudent = e => {
            e.preventDefault();
            axios.post(API_URL, this.state).then(() => {
              this.props.resetState();
              this.props.toggle();
            });
          };
        
          editStudent = e => {
            e.preventDefault();
            axios.put(API_URL + this.state.pk, this.state).then(() => {
              this.props.resetState();
              this.props.toggle();
            });
          };

          {!students || students.length <= 0 ? (

            deleteStudent = pk => {
                axios.delete(API_URL + pk).then(() => {
                  this.props.resetState();
                  this.toggle();
                });
              };     

        
              