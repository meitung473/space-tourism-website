export default function getDisplayName<T>(
    CoreComponent: React.ComponentType<T>
) {
    return CoreComponent.displayName || CoreComponent.name || "Component";
}
