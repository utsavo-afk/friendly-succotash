import Bull, { Queue } from 'bull';
import conf from '@src/config';
import { emailProcess } from '@src/jobs';

const emailQueue: Queue = new Bull('email', {
	redis: {
		port: 6379,
		host: conf.HOST,
	},
});

const sendNewEmail = (data: any) => {
	emailQueue.add(data, {});
};

emailQueue.process(emailProcess);
export default { sendNewEmail };
