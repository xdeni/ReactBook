import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Adenilson Santos',
        avatar:
          'https://scontent.ffor1-2.fna.fbcdn.net/v/t1.0-9/36666623_666129240385031_7244501537811070976_n.jpg?_nc_cat=102&_nc_ht=scontent.ffor1-2.fna&oh=d69448eac3cdf05d80e56b0aaafa32e8&oe=5CD941CA',
        time: '2 years ago',
        body:
          'It is a long established fact that a reader will be distracted by, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      },
      {
        id: 2,
        name: 'Andressa Karen',
        avatar:
          'https://scontent.ffor1-2.fna.fbcdn.net/v/t1.0-9/39522432_1836929226395782_4253876837073027072_n.jpg?_nc_cat=100&_nc_ht=scontent.ffor1-2.fna&oh=e9e54b00fe81818487997a0813f34b2c&oe=5C8EB004',
        time: '2 years ago',
        body:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      },
      {
        id: 3,
        name: 'Marcelo Costa',
        avatar:
          'https://scontent.ffor1-1.fna.fbcdn.net/v/t1.0-1/47464976_2371822596223015_2208954242142568448_n.jpg?_nc_cat=103&_nc_ht=scontent.ffor1-1.fna&oh=3be66aba34044f08d74d0bf586df84c1&oe=5CCD2A94',
        time: '3 years ago',
        body:
          'Lorem Ipsum is simply content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and dummy) text of the printing and typesetting industry',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </Fragment>
    );
  }
}
