import React from 'react';
import { Link } from 'react-router-dom';
import face3 from '../assets/img/faces/face-3.jpg';

export default class UserProfile extends React.Component {
    render() {
        return (
            <div className='content'>
            <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4'>
                <div className='card card-user'>
                    <div className='card-image'>
                    <img src='https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400' alt='...' />
                    </div>
                    <div className='card-body'>
                    <div className='author'>
                        <Link to='/'>
                        <img className='avatar border-gray' src='https://instagram.fewr1-5.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/43272403_256851251701534_500213401126048070_n.jpg?_nc_ht=instagram.fewr1-5.fna.fbcdn.net&_nc_cat=110&_nc_ohc=51HZUXD4OcgAX_SygHZ&oh=d3b5dd2b5df58beca2344c0eb7a4a978&oe=5F443583' alt='...' />
                        <h5 className='title'>Eggs Benedict</h5>
                        </Link>
                        <p className='description'>
                        eggs4life
                        </p>
                    </div>
                    <p className='description text-center'>
                        Named after breakfast
                        <br /> Adorable
                        <br /> Chill
                    </p>
                    </div>
                    <hr />
                    <div className='button-container mr-auto ml-auto'>
                    <button className='btn btn-simple btn-link btn-icon'>
                        <i className='fa fa-facebook-square'></i>
                    </button>
                    <button className='btn btn-simple btn-link btn-icon'>
                        <i className='fa fa-twitter'></i>
                    </button>
                    <button className='btn btn-simple btn-link btn-icon'>
                        <i className='fa fa-google-plus-square'></i>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}