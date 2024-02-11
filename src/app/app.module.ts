import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChitChatLayoutComponent } from './components/chit-chat-layout/chit-chat-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { IncomingMessageComponent } from './components/incoming-message/incoming-message.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { OutgoingMessageComponent } from './components/outgoing-message/outgoing-message.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { initConfig } from './providers/config';
import { ConfigService } from './services/config/config.service';
import { StompService } from './services/web-socket/stomp.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    LoginComponent,
    HeaderComponent,
    SideNavComponent,
    ChitChatLayoutComponent,
    MessageBoxComponent,
    MessageInputComponent,
    IncomingMessageComponent,
    OutgoingMessageComponent,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ConfigService],
      multi: true,
    },
    StompService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
