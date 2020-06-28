import { PathUtils } from "../../util/PathUtils";
import { CollegeBase } from "../enums/CollegeBase";

/**
 * this class always return all accounts, and if they are updated, return updated accounts
 */
export class TwitterCheckProcesses {

    private static accounts: CollegeBase[];

    public static checkProcesses() {
        return this.accounts;
    }

    /** Call this function when processStatus is updated*/
    public static update(account: CollegeBase){
        for(let i = 0; i < this.accounts.length; i++){
            if(this.accounts[i].getId() === account.getId()){
                this.accounts[i] = account;
            }
        }
    }

    public static initiate(accounts: CollegeBase[]){
        this.accounts = accounts;
    }
}