import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import { getSidebarStatus, setSidebarStatus, getSize, setSize, setLanguage } from '@/untils/cookies';
import { getLocal } from '@/lang'
import store from '@/store';

export enum DeviceType {
    Mobile,
    Desktop
}

export interface IAppState {
    device: DeviceType,
    sidebar: {
        open: boolean,
        withoutAnimation: boolean,
    },
    language: string,
    size: string
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
    public device = DeviceType.Desktop;

    public sidebar = {
        open: getSidebarStatus() !== 'closed',
        withoutAnimation: false
    }

    public language = getLocal();
    public size = getSize() || 'medium';

    @Mutation
    private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
        this.sidebar.open = !this.sidebar.open;
        this.sidebar.withoutAnimation = withoutAnimation;
        if (this.sidebar.open) {
            setSidebarStatus('opened');
        } else {
            setSidebarStatus('closed');
        }
    }

    @Mutation
    private CLOSE_SIDEBAR(withoutAnimation: boolean) {
        this.sidebar.open = false;
        this.sidebar.withoutAnimation = withoutAnimation;
        setSidebarStatus('closed');
    }

    @Mutation
    private TOGGLE_DEVICE(device: DeviceType) {
        this.device = device
    }

    @Mutation
    private SET_LANGUAGE(language: string) {
        this.language = language;
        setLanguage(language);
    }

    @Mutation
    private SET_SIZE(size: string) {
        this.size = size
        setSize(this.size)
    }

    @Action
    public ToggleSideBar(withoutAnimation: boolean) {
        this.TOGGLE_SIDEBAR(withoutAnimation)
    }

    @Action
    public CloseSideBar(withoutAnimation: boolean) {
        this.CLOSE_SIDEBAR(withoutAnimation)
    }

    @Action
    public ToggleDevice(device: DeviceType) {
        this.TOGGLE_DEVICE(device)
    }

    @Action
    public SetLanguage(language: string) {
        this.SET_LANGUAGE(language)
    }

    @Action
    public SetSize(size: string) {
        this.SET_SIZE(size)
    }
}

export const AppModule = getModule(App);