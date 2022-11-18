export function importImage(str: string): string {
    let name = str.replace("./assets/", "");
    return name;
}
