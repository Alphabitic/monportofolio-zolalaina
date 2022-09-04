import { Stack, Input, Textarea, useToast } from "@chakra-ui/react"
import { useState, useRef } from 'react'
import styles from '../styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
import { userinfo, headings, ctaTexts } from '../Constants/userinfo'
import { initializeApp } from "firebase/app";
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCceqe5pVDUrr-XyTIJxtWfQMSeK_4mLYw",
  authDomain: "portofolio-responses.firebaseapp.com",
  projectId: "portofolio-responses",
  storageBucket: "portofolio-responses.appspot.com",
  messagingSenderId: "971800859022",
  appId: "1:971800859022:web:04457f0110e0c6262f94df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const sendContactForm = async ({ name, email, comment }) => {
  try {
    const ref = collection(firestore, "contact");
    await addDoc(ref, {
      name,
      email,
      comment,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err)
    return -1;
  }
};

const Contact = ({ currentTheme }) => {
  const toast = useToast()
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res == 0) {
      setMessage("Thank you for your valuable comment!");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }


    toast({
      description: "Merci pour l'intérêt que vous me portez",
      status: "success",
      duration: 5000,
      isClosable: true,
    })

  }

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactHeading}>
        <h2 className={styles.contact}>{headings.contact}</h2>
      </div>
      <form ref={formRef} onSubmit={submitContact} className={styles.form} style={{ borderColor: currentTheme.text, backgroundColor: currentTheme.name === 'light' ? '#fafafa' : 'transparent' }}>
        <Stack spacing={4}>
          <Input type={"text"} name="name" placeholder="Votre nom" focusBorderColor={currentTheme.tertiary} isRequired autoComplete="off" />
          <Input type={"email"} name="email" placeholder="@email.com" focusBorderColor={currentTheme.tertiary} autoComplete="off" isRequired />
          <Textarea
            placeholder="votre contenu"
            resize="vertical"
            focusBorderColor={currentTheme.tertiary}
            isRequired
            name="email"
            autoComplete="off"

          />
          <div>
            <div className={styles.submit} style={{ backgroundColor: currentTheme.tertiary }}>
              <button type="submit">{ctaTexts.submitBTN}</button>
            </div>
          </div>
        </Stack>
      </form>

      <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
        <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}><a>{userinfo.contact.email}</a></Link>
      </div>
      {
        userinfo.contact.phone ?
          <div style={{ textAlign: 'center', paddingTop: '0.2rem', color: currentTheme.tertiary }}>
            <Link href={`tel:${userinfo.contact.countrycode}${userinfo.contact.phone}`}><a>{`${userinfo.contact.countrycode}${userinfo.contact.phone}`}</a></Link>
          </div> : null
      }
      <div className={styles.socialIconDiv}>
        {userinfo.socials ?
          userinfo.socials.map((social, key) => {
            return (
              <div className={styles.socialIcon} key={key}>
                <Link href={social.link}><a><FontAwesomeIcon icon={social.icon} /></a></Link>
              </div>
            )
          }) : null
        }
      </div>
    </div>
  )
}

export default Contact
