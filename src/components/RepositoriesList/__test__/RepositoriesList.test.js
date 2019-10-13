import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from '@chakra-ui/core';

import RepositoriesList from '../RepositoriesList';

const repositories = [{
  id: 'MDEwOlJlcG9zaXRvcnkyMDkzODE5MTk=', name: 'roughViz', description: 'Reusable JavaScript library for creating sketchy/hand-drawn styled charts in the browser.', url: 'https://github.com/jwilber/roughViz', owner: { login: 'jwilber', __typename: 'User' }, licenseInfo: null, stargazers: { totalCount: 647, __typename: 'StargazerConnection' }, forks: { totalCount: 15, __typename: 'RepositoryConnection' }, createdAt: '2019-09-18T18:52:35Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTE4MTMxNTk=', name: 'create-social-network', description: 'Create Social Network by running one command. Demo: https://worldexplorer.netlify.com/', url: 'https://github.com/udilia/create-social-network', owner: { login: 'udilia', __typename: 'Organization' }, licenseInfo: { name: 'MIT License', __typename: 'License' }, stargazers: { totalCount: 482, __typename: 'StargazerConnection' }, forks: { totalCount: 65, __typename: 'RepositoryConnection' }, createdAt: '2019-09-30T08:31:33Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTI5ODM5MTQ=', name: 'is-website-vulnerable', description: "finds publicly known security vulnerabilities in a website's frontend JavaScript libraries", url: 'https://github.com/lirantal/is-website-vulnerable', owner: { login: 'lirantal', __typename: 'User' }, licenseInfo: { name: 'Apache License 2.0', __typename: 'License' }, stargazers: { totalCount: 420, __typename: 'StargazerConnection' }, forks: { totalCount: 22, __typename: 'RepositoryConnection' }, createdAt: '2019-10-05T10:52:11Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTIzMDk4NDA=', name: 'react-useanimations', description: 'React-useanimations is a collection of free animated open source icons for React.js.', url: 'https://github.com/useAnimations/react-useanimations', owner: { login: 'useAnimations', __typename: 'Organization' }, licenseInfo: { name: 'Other', __typename: 'License' }, stargazers: { totalCount: 338, __typename: 'StargazerConnection' }, forks: { totalCount: 8, __typename: 'RepositoryConnection' }, createdAt: '2019-10-02T10:20:55Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMDkzOTE1MTM=', name: 'CppCon2019', description: ' Slides and other materials from CppCon 2019', url: 'https://github.com/CppCon/CppCon2019', owner: { login: 'CppCon', __typename: 'Organization' }, licenseInfo: null, stargazers: { totalCount: 335, __typename: 'StargazerConnection' }, forks: { totalCount: 26, __typename: 'RepositoryConnection' }, createdAt: '2019-09-18T19:48:43Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTAzMDEwOTI=', name: 'Vue.NetCore', description: '.NetCore+Vue，前后端后离，支持前后端业务代码扩展的快速开发框架，Vol.Vue为前端项目，Vue.Net后台项目', url: 'https://github.com/cq-panda/Vue.NetCore', owner: { login: 'cq-panda', __typename: 'User' }, licenseInfo: null, stargazers: { totalCount: 325, __typename: 'StargazerConnection' }, forks: { totalCount: 113, __typename: 'RepositoryConnection' }, createdAt: '2019-09-23T08:19:25Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMDg2NDI0MjY=', name: 'awesome-earth', description: "The planet doesn't need to be simultaneously on fire and underwater. We can fix things.", url: 'https://github.com/philsturgeon/awesome-earth', owner: { login: 'philsturgeon', __typename: 'User' }, licenseInfo: { name: 'MIT License', __typename: 'License' }, stargazers: { totalCount: 156, __typename: 'StargazerConnection' }, forks: { totalCount: 31, __typename: 'RepositoryConnection' }, createdAt: '2019-09-15T18:59:46Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTA0NjMyODQ=', name: 'react-performance', description: "Let's make our apps fast ⚡", url: 'https://github.com/kentcdodds/react-performance', owner: { login: 'kentcdodds', __typename: 'User' }, licenseInfo: null, stargazers: { totalCount: 153, __typename: 'StargazerConnection' }, forks: { totalCount: 9, __typename: 'RepositoryConnection' }, createdAt: '2019-09-23T22:26:01Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTQxOTQ3NjA=', name: 'zzkia', description: 'Generate Nokia message picture for fun!', url: 'https://github.com/dcalsky/zzkia', owner: { login: 'dcalsky', __typename: 'User' }, licenseInfo: null, stargazers: { totalCount: 149, __typename: 'StargazerConnection' }, forks: { totalCount: 19, __typename: 'RepositoryConnection' }, createdAt: '2019-10-10T13:48:39Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTIzNjM2MjI=', name: 'delatin', description: 'A fast JavaScript terrain mesh generation tool based on Delaunay triangulation', url: 'https://github.com/mapbox/delatin', owner: { login: 'mapbox', __typename: 'Organization' }, licenseInfo: { name: 'ISC License', __typename: 'License' }, stargazers: { totalCount: 137, __typename: 'StargazerConnection' }, forks: { totalCount: 6, __typename: 'RepositoryConnection' }, createdAt: '2019-10-02T14:33:45Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTExNzY0NDg=', name: 'open-pixel-art', description: 'A collaborative pixel art project to teach people how to contribute to open-source', url: 'https://github.com/twilio-labs/open-pixel-art', owner: { login: 'twilio-labs', __typename: 'Organization' }, licenseInfo: { name: 'MIT License', __typename: 'License' }, stargazers: { totalCount: 137, __typename: 'StargazerConnection' }, forks: { totalCount: 741, __typename: 'RepositoryConnection' }, createdAt: '2019-09-26T20:32:04Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTAyNzY3OTk=', name: 'SubPlayer', description: ':memo: SubPlayer is a online subtitle editor', url: 'https://github.com/zhw2590582/SubPlayer', owner: { login: 'zhw2590582', __typename: 'User' }, licenseInfo: { name: 'MIT License', __typename: 'License' }, stargazers: { totalCount: 99, __typename: 'StargazerConnection' }, forks: { totalCount: 4, __typename: 'RepositoryConnection' }, createdAt: '2019-09-23T06:07:19Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTIxOTIzMzk=', name: 'honkify', description: 'Set a goose loose on your site to be a jerk.', url: 'https://github.com/jlengstorf/honkify', owner: { login: 'jlengstorf', __typename: 'User' }, licenseInfo: null, stargazers: { totalCount: 94, __typename: 'StargazerConnection' }, forks: { totalCount: 6, __typename: 'RepositoryConnection' }, createdAt: '2019-10-01T20:23:17Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTEyMDUzMzc=', name: 'react-three-gui', description: 'GUI tools for react-three-fiber and react-spring', url: 'https://github.com/ueno-llc/react-three-gui', owner: { login: 'ueno-llc', __typename: 'Organization' }, licenseInfo: null, stargazers: { totalCount: 88, __typename: 'StargazerConnection' }, forks: { totalCount: 1, __typename: 'RepositoryConnection' }, createdAt: '2019-09-27T00:40:41Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTA5NDc4OTk=', name: 'object-tracking-js', description: 'Track an object as it moves in a video with no training', url: 'https://github.com/cloud-annotations/object-tracking-js', owner: { login: 'cloud-annotations', __typename: 'Organization' }, licenseInfo: { name: 'MIT License', __typename: 'License' }, stargazers: { totalCount: 86, __typename: 'StargazerConnection' }, forks: { totalCount: 11, __typename: 'RepositoryConnection' }, createdAt: '2019-09-25T21:59:18Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTM3MzkyNTk=', name: 'prettier-chrome-extension', description: 'Prettier Chrome Extension', url: 'https://github.com/prettier/prettier-chrome-extension', owner: { login: 'prettier', __typename: 'Organization' }, licenseInfo: { name: 'MIT License', __typename: 'License' }, stargazers: { totalCount: 83, __typename: 'StargazerConnection' }, forks: { totalCount: 5, __typename: 'RepositoryConnection' }, createdAt: '2019-10-08T19:50:23Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMDg1MzQ1NjE=', name: 'used-book-pro', description: '微信小程序云开发校园二手书商城，可在线支付提现，源码全开源', url: 'https://github.com/xuhuai66/used-book-pro', owner: { login: 'xuhuai66', __typename: 'User' }, licenseInfo: null, stargazers: { totalCount: 80, __typename: 'StargazerConnection' }, forks: { totalCount: 22, __typename: 'RepositoryConnection' }, createdAt: '2019-09-15T03:07:38Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTA4NTM1NTI=', name: 'chrome_v8_exploit', description: 'A collection of 1days and solutions to challenges related to v8/chrome I developed', url: 'https://github.com/Geluchat/chrome_v8_exploit', owner: { login: 'Geluchat', __typename: 'User' }, licenseInfo: null, stargazers: { totalCount: 79, __typename: 'StargazerConnection' }, forks: { totalCount: 17, __typename: 'RepositoryConnection' }, createdAt: '2019-09-25T13:34:25Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTE1MjkzMTE=', name: 'expressjs-k8s', description: 'Express.js microservice with a Dockerfile, Kubernetes YAMLs and a non-root user', url: 'https://github.com/alexellis/expressjs-k8s', owner: { login: 'alexellis', __typename: 'User' }, licenseInfo: { name: 'MIT License', __typename: 'License' }, stargazers: { totalCount: 75, __typename: 'StargazerConnection' }, forks: { totalCount: 11, __typename: 'RepositoryConnection' }, createdAt: '2019-09-28T16:27:40Z', __typename: 'Repository',
}, {
  id: 'MDEwOlJlcG9zaXRvcnkyMTAzMzIyNTg=', name: 'learn-graphql', description: 'Real world GraphQL tutorials for frontend developers with deadlines!', url: 'https://github.com/hasura/learn-graphql', owner: { login: 'hasura', __typename: 'Organization' }, licenseInfo: { name: 'MIT License', __typename: 'License' }, stargazers: { totalCount: 74, __typename: 'StargazerConnection' }, forks: { totalCount: 75, __typename: 'RepositoryConnection' }, createdAt: '2019-09-23T10:55:57Z', __typename: 'Repository',
}];


describe('RepositoriesList testing', () => {
  test('No data', () => {
    const wrapper = shallow(<RepositoriesList repositories={[]} fetch={false} />);
    expect(wrapper.children().text()).toEqual('No data');
  });
  test('Fetching spinner', () => {
    const wrapper = shallow(<RepositoriesList repositories={[]} fetch />);
    expect(wrapper.find(Spinner).exists()).toEqual(true);
  });
  test('render repos', () => {
    const wrapper = shallow(<RepositoriesList repositories={repositories} fetch={false} />);
    expect(wrapper.children().length).toEqual(20);
  });
});
