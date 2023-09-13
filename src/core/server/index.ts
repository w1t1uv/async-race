interface IUrl {
    url: string;
}

interface IPath {
    garage: string;
    winners: string;
}

export const urlObject: IUrl = {
    url: 'http://127.0.0.1:3000'
};

export const path: IPath = {
    garage: '/garage',
    winners: '/winners'
};