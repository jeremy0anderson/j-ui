export interface NavigationProps {
    anchor: 'top' | 'left' | 'right' | 'permanent-left';
    background: string;
    menuBackground: string;
    items: string[];
}
export interface NavigationState {
    drawerOpen: boolean;
    activeLink: string;
}
export interface DrawerProps {
    anchor: 'top' | 'left' | 'right' | 'permanent-left';
    open: boolean;
    background?: string;
    items: string[];
    style?: object;
    onToggle?: () => void;
    menuBackground?: string;
}
export interface DrawerState {
}
export interface MenuProps {
    items: string[];
    open: boolean;
    anchor?: string;
    onToggle?: () => void;
}
export interface PermanentMenuProps {
    icons: {
        to: string;
        icon: any;
    }[];
    onToggle?: () => void;
}
export interface AppBarProps {
    linkColor: string;
    tabs: {
        text: string;
        icon: any;
    }[];
    children?: [];
}
export interface AppBarState {
    activeTab: any;
}
