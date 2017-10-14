const channels = [{
  id: 1,
  name: 'soccer'
}, {
  id: 2,
  name: 'baskteball'
}, {
  id: 3,
  name: 'tennis'
}, {
  id: 4,
  name: 'volleyball'
}]

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
  },
}