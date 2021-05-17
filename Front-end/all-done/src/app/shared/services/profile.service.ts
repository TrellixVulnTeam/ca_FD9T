import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private first_name: string;
  public getfirst_name(): string {
    return this.first_name;
  }
  public setfirst_name(value: string) {
    this.first_name = value;
  }
  
  private last_name: string;
  public getlast_name(): string {
    return this.last_name;
  }
  public setlast_name(value: string) {
    this.last_name = value;
  }

  private ent_name: string;
  public getent_name(): string {
    return this.ent_name;
  }
  public setent_name(value: string) {
    this.ent_name = value;
  }
  
  private myemail: string;
  public getmyemail(): string {
    return this.myemail;
  }
  public setmyemail(value: string) {
    this.myemail = value;
  }
  
  private is_client: string;
  public getis_client(): string {
    return this.is_client;
  }
  public setis_client(value: string) {
    this.is_client = value;
  }

  private address: string;
  public getaddress(): string {
    return this.address;
  }
  public setaddress(value: string) {
    this.address = value;
  }

  private city: string;
  public getcity(): string {
    return this.city;
  }
  public setcity(value: string) {
    this.city = value;
  }

  private phone: string;
  public getphone(): string {
    return this.phone;
  }
  public setphone(value: string) {
    this.phone = value;
  }

  private birth_date: string;
  public getbirth_date(): string {
    return this.birth_date;
  }
  public setbirth_date(value: string) {
    this.birth_date = value;
  }

  private fourth_date: string;
  public getfourth_date(): string {
    return this.fourth_date;
  }
  public setfourth_date(value: string) {
    this.fourth_date = value;
  }

  private about_me: string;
  public getabout_me(): string {
    return this.about_me;
  }
  public setabout_me(value: string) {
    this.about_me = value;
  }

  private competences: string;
  public getcompetences(): string {
    return this.competences;
  }
  public setcompetences(value: string) {
    this.competences = value;
  }

  private certifier: string;
  public getcertifier(): string {
    return this.certifier;
  }
  public setcertifier(value: string) {
    this.certifier = value;
  }

  constructor() { }

  SetProfile(first_name :string, last_name :string, ent_name: string, myemail: string, is_client: string, address: string, city: string, phone: string, birth_date: string, fourth_date: string, about_me: string, competences: string, certifier: string): void{
    this.first_name = first_name;
    this.last_name = last_name;
    this.ent_name = ent_name;
    this.myemail = myemail;
    this.is_client = is_client;
    this.address = address;
    this.city = city;
    this.phone = phone;
    this.birth_date = birth_date;
    this.fourth_date = fourth_date;
    this.about_me = about_me;
    this.competences = competences;
    this.certifier = certifier;
  }
}
