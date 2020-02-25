import AppPage from '../AppPage';

class GroupNamePage extends AppPage {

    get h1() {
        return browser.$('//h1');
    }

    get lectureInTheList() {
        return browser.$('//a[@qa="link"]//span');
    }

    get video() {
        return browser.$('//iframe[@title="YouTube video player"]');
    }

    get dislikeBtn() {
        return browser.$('//h3//button[text()="Dislike"]');
    }

    get likeBtn() {
        return browser.$('//h3//button[text()="Like"]');
    }

    get markAsUnderstoodBtn() {
        return browser.$('//div//button[text()="Mark as understood"]');
    }

    get homeworkHeader() {
        return browser.$('//h3[text()="Homework"]');
    }

    get homeworkDescription() {
        return browser.$('//h3[text()="Homework"]//p');
    }

    get sendYourHomeworkToReviewField() {
        return browser.$('//textarea[@name="homework"]');
    }

    get sendHomeworkToReviewBtn() {
        return browser.$('//button[text()="Send homework to review"]');
    }

    get createLectureBtn() {
        return browser.$('//a[@qa="create-lecture-button"]');
    }

    get commentField() {
        return browser.$('//textarea[@name="content"]');
    }

    get addCommentBtn() {
        return browser.$('//button[text()="Add comment"]');
    }





}

export default new GroupNamePage();