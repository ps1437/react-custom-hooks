import React from 'react'
import useOffline from '../Hooks/useOffline';

export default function Offline() {
    const isOffline = useOffline();

    return (
      <div>
        {isOffline ? 'You are offline' : 'You are online'}
      </div>
    );
}
