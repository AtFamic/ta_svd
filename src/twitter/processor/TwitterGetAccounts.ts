import { CollegeBase } from "../enums/CollegeBase";
import { KeiwaCollege } from "../enums/KeiwaCollege";
import { OsakaFukusoGakuin } from "../enums/OsakaFukusoGakuin";
import { OsakaOngakuDaigaku } from "../enums/OsakaOngakuDaigaku";
import { ShingakuCareer } from "../enums/ShingakuCareer";
import { SocialGoodProject } from "../enums/SocialGoodProject";

export class TwitterGetAccounts {

    public static getAccounts(): CollegeBase[] {
        return [
            new ShingakuCareer,
            new OsakaFukusoGakuin,
            new OsakaOngakuDaigaku,
            new KeiwaCollege,
            new SocialGoodProject
        ];
    }
}
