import { ToastAndroid } from 'react-native';
import { mkdir, writeFile, exists, ExternalStorageDirectoryPath } from 'react-native-fs';

const output = str => str;
const path = ExternalStorageDirectoryPath + "/Consulimp/";

const File = {
    getPath: () => {
        return path;
    },

    createDirectory: () => {
        exists(path).then((result) => {
            if (result === false) {
                mkdir(path);
            }
        })
    },

    generateFile: (file, wbout) => {
        exists(path).then((result) => {
            if (result === false) {
                mkdir(path);
            }
            writeFile(file, output(wbout), 'ascii').then((res) => {
                ToastAndroid.show('Arquivo gerado com sucesso!', ToastAndroid.LONG);
            }).catch((err) => {
                ToastAndroid.show(`Ocorreu um erro ao gerar o Arquivo! - ${err.message}`, ToastAndroid.LONG);
            })
        })
    },
}
export default File;