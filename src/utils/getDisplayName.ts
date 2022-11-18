/**
 * HOC component get its original WrappedComponent displayName
 * @param WrappedComponent
 * @returns {string}
 */
export default function getDisplayName<T>(
    WrappedComponent: React.ComponentType<T>
) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
