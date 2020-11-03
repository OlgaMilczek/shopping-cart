import React from 'react'; 
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container-md' style={ { minHeight:'80vh'} }>
            <div className='text-center'>
                <img  src = '/images/logo.png' alt='logo' style = {{ height: '200px'}}/>
                <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porta nisi. Praesent luctus turpis sit amet eros ullamcorper commodo. Etiam vestibulum tempus felis, vel convallis arcu ullamcorper eget. Nulla urna nulla, mattis eu massa accumsan, aliquet fringilla purus. Curabitur nec varius metus, ac finibus sapien. Nullam justo lorem, molestie in ligula id, sodales efficitur eros. Fusce libero augue, pellentesque ac pulvinar vel, pharetra a lacus. Nulla pulvinar sagittis libero in vehicula. Sed laoreet malesuada tincidunt. Fusce id convallis lectus. </p>
                <Link to='/shop'>
                    <button className='btn btn-outline-primary'>Go to shop</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
