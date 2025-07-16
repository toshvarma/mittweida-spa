import { Route, Switch } from 'wouter';
import Header from './header/Header.tsx';
import HomeView from './views/home-view/HomeView.tsx';
import MapView from './views/map-view/MapView.tsx';
import SearchView from './views/search-view/SearchView.tsx';
import LoginView from './views/login-view/LoginView.tsx';
import ErrorView from "./views/error-view/ErrorView.tsx";
import ProfileView from "./views/profile-view/ProfileView.tsx";
import PPView from "./views/legal-views/PPView.tsx";
import TOSView from "./views/legal-views/TOSView.tsx";
import SettingsView from "./views/settings-view/SettingsView.tsx";
import SavedView from "./views/saved-view/SavedView.tsx";
import PlaceDetailView from "./views/detail-view/PlaceDetailView.tsx";


export default function App (){

    return (
        <>
            <Header isLoggedIn2={false} />
            <main className="page-content">
                <Switch>
                    <Route path="/" component={HomeView} />
                    <Route path="/map" component={() => <MapView />} />
                    <Route path="/search" component={SearchView} />
                    <Route path="/login" component={LoginView} />
                    <Route path="/profile" component={ProfileView} />
                    <Route path="/terms" component={TOSView} />
                    <Route path="/privacy" component={PPView} />
                    <Route path="/settings" component={SettingsView} />
                    <Route path="/saved" component={SavedView} />
                    <Route path="/place/:id" component={PlaceDetailView} />

                    <Route><ErrorView /></Route>
                </Switch>

            </main>

        </>
    );
};


