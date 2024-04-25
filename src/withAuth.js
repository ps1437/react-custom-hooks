import React from 'react'

export default function withAuth(WrapComponent) {

    return  (props) => {
        const isAuthenticated = true; // Some function to check if user is authenticated
        return isAuthenticated ? <WrapComponent {...props}  isAuthenticated/> : <div>FAield</div>
      };
}
