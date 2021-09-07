export default function importAll(r) {
    let files = {};
    r.keys().map(item => { files[item.replace('./', '')] = r(item); });
    return files;
}