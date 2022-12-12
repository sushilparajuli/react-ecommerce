import Directory from '../../components/directory/directory.component';
const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'hats',
            imageUrl: 'https://source.unsplash.com/1600x900/?hat',
        },
        {
            id: 2,
            title: 'jackets',
            imageUrl: 'https://source.unsplash.com/1600x900/?jacket',
        },
        {
            id: 3,
            title: 'sneakers',
            imageUrl: 'https://source.unsplash.com/1600x900/?sneaker',
        },
        {
            id: 4,
            title: 'womens',
            imageUrl: 'https://source.unsplash.com/1600x900/?women,fashion',
        },
        {
            id: 5,
            title: 'mens',
            imageUrl: 'https://source.unsplash.com/1600x900/?men,fashion',
        },
    ];

    return <Directory categories={categories} />;
};

export default Home;
