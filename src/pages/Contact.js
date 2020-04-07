import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { createUser, getAllUser, deleteEmployee, singleUser, updateUser } from '../services/MyServices';

class Contact extends React.Component {
    state = {
        uid: "",
        uname: "",
        email: "",
        phone: "",
        address: "",
        deletestatus: "",
        // error: null,
        blogPost: [],
        userEdit: [],
        isEditForm: false,
        isAddForm: false
    }
    handleChange = (event) => {
        this.setState({
            /*uname:event.target.value*/ /* for one input*/
            [event.target.name]: event.target.value
        });
        //    console.log(this.state);
    };
    bottonClick = (event) => {
        // event.preventDefault();
        createUser(this.state).then(res => {
            // return res;
            res === 'success' ? alert("ok") : alert("no");
            this.setState({ uname: "", email: "", phone: "", address: "" });
        }).catch(err => err);

    };
    updateClick = (event) => {
        updateUser(this.state).then(res => {
            res === 'success' ? alert("Updated") : alert("no");
            this.setState({ uid: "", uname: "", email: "", phone: "", address: "" });
        }).catch(err => err);
    };
    editButton = (eid) => {
        this.setState({
            isAddForm: false,
            isEditForm: true
        });
        singleUser(eid)
            .then((data) => {
                this.setState(state => {
                    state.userEdit = data;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });


    };
    addButton = () => {
        this.setState({
            isAddForm: true,
            isEditForm: false
        })
    };
    onDelete = (eid) => {
        deleteEmployee(eid).then(res => {
            res === 'success' ? alert(res) : alert(res);
            getAllUser();
        }).catch(err => err);
    };

    componentDidMount() {
        getAllUser()
            .then((data) => {
                this.setState(state => {
                    state.blogPost = data;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    }
    render() {
        const { uname, email, phone, address } = this.state;
        const { blogPost, userEdit } = this.state;

        return (
            <div>
                <Nav />
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Action <button className="btn btn-success" onClick={this.addButton}>Add</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogPost.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.firstName}</td>
                                    <td>{product.emailId}</td>
                                    <td>{product.address}</td>
                                    <td>{product.phone}</td>
                                    <td>
                                        {/* <button className="btn btn-info" onClick={() => this.props.editProduct(product.id)}>Edit</button> */}
                                        <button className="btn btn-info" onClick={() => this.editButton(product.id)}>Edit</button>
                                    &nbsp;<button className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {this.state.isAddForm &&
                    <div className="container">
                        <div className="row">
                            <div className="col-6">

                                <form onSubmit={this.bottonClick}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text"
                                            name="uname"
                                            onChange={this.handleChange}
                                            value={uname}
                                            className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" name="email"
                                            onChange={this.handleChange} value={email}
                                            className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" name="phone"
                                            onChange={this.handleChange} value={phone} className="form-control" />

                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea name="address"
                                            onChange={this.handleChange} value={address}
                                            className="form-control" id="" cols="30" rows="5"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-success">Save</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                }
                {this.state.isEditForm &&
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                {userEdit.map(users => (
                                    <form onSubmit={this.updateClick} key={users.id}>
                                        <input type="text" onChange={this.handleChange} name="eid" hidden value={users.id} />
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text"
                                                name="uname"
                                                onChange={this.handleChange}
                                                value={users.firstName}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" name="email"
                                                onChange={this.handleChange} value={users.emailId}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" name="phone"
                                                onChange={this.handleChange} value={users.phone} className="form-control" />

                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <textarea name="address"
                                                onChange={this.handleChange} value={users.address}
                                                className="form-control" id="" cols="30" rows="5"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-success">Update</button>
                                        </div>
                                    </form>
                                ))}
                            </div>
                        </div>
                    </div>
                }
                <Footer />
            </div>
        );
    }
}
export default Contact;