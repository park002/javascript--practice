const settings = {
    color: {
        theme: 'dark'
    }
};
const { notifications: { follow = 'potato' } = {} } = settings;
console.log(follow);
