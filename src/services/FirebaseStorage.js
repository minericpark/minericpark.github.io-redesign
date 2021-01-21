import Firebase from './Firebase';
import '@firebase/storage';

const firebasestorage = Firebase.storage();

export const getImages = async (directory, imgFilenames) => {
    try {
        const results = await firebasestorage
            .ref('images/')
            .child(directory)
            .listAll();

        const responses = results.items.map(imageRef => imageRef.getDownloadURL());
        return Promise.all(responses);
    } catch (err) {
        console.log('Error message: ', err);
    }
}

export const getImage = async (directory, imgFilename) => {
    try {
        const response = await firebasestorage
            .ref('images/' + directory + '/' + imgFilename)
            .getDownloadURL();
        return response;
    } catch (err) {
        console.log('Error message: ', err);
    }
}

export const getVideo = (vidFilename) => {
    return firebasestorage
        .ref('videos/' + vidFilename)
        .getDownloadURL()
        .catch(error => alert(error.message));
}

export const getDocument = (docFilename) => {
    return firebasestorage
        .ref('documents/' + docFilename)
        .getDownloadURL()
        .catch(error => alert(error.message));
}
