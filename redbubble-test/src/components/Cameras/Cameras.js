import React from 'react';
import Camera from '../Camera/Camera';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_WORKS = gql`
  {
    works {
      id
      filename
      exif {
        model
        make
      }
      urls {
        type
        link
      }
    }
  }
`;

const Cameras = () => (
  <Query query={GET_WORKS}>
    {
      ({ loading, data}) => {
        if(loading) return <p>loading...</p>;
        return data.works.map((currentCamera) => (
          <Camera work={currentCamera} />
        ));
      }
    }
  </Query>
);

export default Cameras;

